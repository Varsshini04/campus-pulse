import { mockGet } from "@/lib/api";
import type { AdmissionDatum, GaugeDatum } from "@/features/dashboard/types";

export async function getAdmissionScholarships() {
  return mockGet<AdmissionDatum[]>("/admission/4");
}

export async function getExamValuationProgress() {
  return mockGet<GaugeDatum>("/exam/7");
}

export async function getPerformanceTrend() {
  return mockGet<GaugeDatum>("/analytics/performance");
}
