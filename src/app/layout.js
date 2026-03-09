import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Meal Gallery",
  description: "SSR meal gallery powered by TheMealDB and React Query",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
