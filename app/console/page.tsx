import type { Metadata } from "next";
import { Workbench } from "@/components/Workbench";

export const metadata: Metadata = {
  title: "Auditor console",
  description:
    "SIU workbench for Aegis — ranked healthcare claims with upcoding, unbundling, and duplicate flags.",
};

export default function ConsolePage() {
  return <Workbench />;
}
