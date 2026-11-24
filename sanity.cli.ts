import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "1md6mwa7",
    dataset: "production",
  },
  deployment: {
    appId: "uy5thif8zhnwv36h6ghthlqp",
    autoUpdates: true,
  },
});
