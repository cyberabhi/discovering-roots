import { createFileRoute } from "@tanstack/react-router";
import { EmbeddedStudio } from "@/components/studio/EmbeddedStudio";

export const Route = createFileRoute("/studio/")({
  component: EmbeddedStudio,
});
