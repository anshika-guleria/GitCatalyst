"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DEFAULT_USERNAME } from "@/lib/github";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentUsername, setCurrentUsername] = useState<string>(DEFAULT_USERNAME);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Desktop Sidebar */}
      <div className="hidden md:block shrink-0">
        <DashboardSidebar currentUsername={currentUsername} />
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-10 w-64 max-w-[80vw] bg-card h-full">
            <DashboardSidebar
              currentUsername={currentUsername}
              onNavigate={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Main App Content Area */}
      <div className="flex flex-1 flex-col overflow-x-hidden">
        <DashboardHeader
          currentUsername={currentUsername}
          onUsernameChange={(newUsername) => setCurrentUsername(newUsername)}
          onToggleMobileMenu={() => setMobileMenuOpen(true)}
        />

        <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
