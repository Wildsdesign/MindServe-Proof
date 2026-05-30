type Surface = "cashier" | "ordering" | "analytics" | "management";

type FacilityContext = {
  facilityId: string;
  roles: string[];
};

type CapabilityRequest =
  | { type: "OPEN_SURFACE"; surface: Surface }
  | { type: "SUMMARIZE_STATUS"; surface: Surface }
  | { type: "PREPARE_HANDOFF"; surface: Surface; shiftId?: string };

type CapabilityResult = {
  surface: Surface;
  title: string;
  summary: string;
  nextActions: string[];
};

export async function resolveSuiteCapability(
  context: FacilityContext,
  request: CapabilityRequest,
): Promise<CapabilityResult> {
  assertFacilityContext(context);

  switch (request.type) {
    case "OPEN_SURFACE":
      return describeSurface(request.surface);

    case "SUMMARIZE_STATUS":
      return summarizeSurface(context, request.surface);

    case "PREPARE_HANDOFF":
      return prepareHandoff(context, request.surface, request.shiftId);
  }
}

function assertFacilityContext(context: FacilityContext) {
  if (!context.facilityId) {
    throw new Error("Facility context is required.");
  }
}

async function describeSurface(surface: Surface): Promise<CapabilityResult> {
  return {
    surface,
    title: `${surface} surface`,
    summary: "Suite surfaces are selected by operator job, not by database table.",
    nextActions: ["open surface", "review facility-scoped context"],
  };
}

async function summarizeSurface(
  context: FacilityContext,
  surface: Surface,
): Promise<CapabilityResult> {
  return {
    surface,
    title: "Facility-scoped status",
    summary: `Status summary is resolved inside facility ${context.facilityId}.`,
    nextActions: ["review exceptions", "prepare follow-up"],
  };
}

async function prepareHandoff(
  context: FacilityContext,
  surface: Surface,
  shiftId?: string,
): Promise<CapabilityResult> {
  return {
    surface,
    title: "Operator handoff",
    summary: shiftId
      ? `Handoff prepared for shift ${shiftId} inside facility ${context.facilityId}.`
      : `Handoff prepared inside facility ${context.facilityId}.`,
    nextActions: ["confirm details", "share with approved role"],
  };
}
