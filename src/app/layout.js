import "./globals.css";

export const metadata = {
  title: "BluTV Lig",
  description: "BluTV Turnuva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-t bg-repeat from-[#081329] to-indigo-800">
        {children}
      </body>
    </html>
  );
}
