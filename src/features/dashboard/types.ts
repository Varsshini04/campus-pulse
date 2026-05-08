export type AdmissionDatum = {
  category: string;
  value: number;
};

export type GaugeDatum = {
  value: number;
  min: number;
  max: number;
};

export type WidgetKey = "admission" | "exam" | "performance";

export type WidgetState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export type DashboardStore = {
  admission: WidgetState<AdmissionDatum[]>;
  exam: WidgetState<GaugeDatum>;
  performance: WidgetState<GaugeDatum>;
  fetchAdmission: () => Promise<void>;
  fetchExam: () => Promise<void>;
  fetchPerformance: () => Promise<void>;
  refreshWidget: (widget: WidgetKey) => Promise<void>;
  refreshAll: () => Promise<void>;
};
