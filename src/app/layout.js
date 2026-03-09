import "./globals.css";
import Providers from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata = {
  title: "Meal Gallery",
  description: "SSR meal gallery powered by TheMealDB and React Query",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SpeedInsights />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
