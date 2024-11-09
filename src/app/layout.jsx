// import { Inter } from "next/font/google";
"use client";
import { iranSans } from "@/lib/font";
import "./globals.css";
import ReduxStoreProviders from "@/providers/ReduxStoreProviders";
import DashboardRoot from "@/components/dashboard/DashboardRoot";
import "react-calendar-datetime-picker/dist/style.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={iranSans.className}>
        <ReduxStoreProviders>
          <DashboardRoot>{children}</DashboardRoot>
        </ReduxStoreProviders>
      </body>
    </html>
  );
}
