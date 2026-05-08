import { create } from "zustand";
import { getAdmissionScholarships, getExamValuationProgress, getPerformanceTrend } from "@/features/dashboard/api";
import type { DashboardStore, WidgetKey } from "@/features/dashboard/types";

const createInitialWidgetState = <T>() => ({
  data: null as T | null,
  loading: false,
  error: null as string | null,
});

export const useDashboardStore = create<DashboardStore>((set, get) => ({
  admission: createInitialWidgetState(),
  exam: createInitialWidgetState(),
  performance: createInitialWidgetState(),

  fetchAdmission: async () => {
    set((state) => ({ admission: { ...state.admission, loading: true, error: null } }));
    try {
      const data = await getAdmissionScholarships();
      set({ admission: { data, loading: false, error: null } });
    } catch (error) {
      set({
        admission: {
          data: null,
          loading: false,
          error: error instanceof Error ? error.message : "Failed to load admission data",
        },
      });
    }
  },

  fetchExam: async () => {
    set((state) => ({ exam: { ...state.exam, loading: true, error: null } }));
    try {
      const data = await getExamValuationProgress();
      set({ exam: { data, loading: false, error: null } });
    } catch (error) {
      set({
        exam: {
          data: null,
          loading: false,
          error: error instanceof Error ? error.message : "Failed to load exam progress",
        },
      });
    }
  },

  fetchPerformance: async () => {
    set((state) => ({ performance: { ...state.performance, loading: true, error: null } }));
    try {
      const data = await getPerformanceTrend();
      set({ performance: { data, loading: false, error: null } });
    } catch (error) {
      set({
        performance: {
          data: null,
          loading: false,
          error: error instanceof Error ? error.message : "Failed to load performance trend",
        },
      });
    }
  },

  refreshWidget: async (widget: WidgetKey) => {
    if (widget === "admission") return get().fetchAdmission();
    if (widget === "exam") return get().fetchExam();
    return get().fetchPerformance();
  },

  refreshAll: async () => {
    await Promise.all([get().fetchAdmission(), get().fetchExam(), get().fetchPerformance()]);
  },
}));
