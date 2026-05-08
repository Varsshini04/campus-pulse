import axios from "axios";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = axios.create({
  baseURL: "/",
});

api.interceptors.request.use(async (config) => {
  await wait(250);
  return config;
});

api.interceptors.response.use(undefined, async (error) => Promise.reject(error));

export async function mockGet<T>(url: string): Promise<T> {
  const mockRoutes: Record<string, string> = {
    "/admission/4": "/mock/admission-4.json",
    "/exam/7": "/mock/exam-7.json",
    "/analytics/performance": "/mock/analytics-health.json",
  };
  const mockPath = mockRoutes[url];
  if (!mockPath) throw new Error("Mock endpoint not found.");
  const response = await api.get<T>(mockPath);
  return response.data;
}
