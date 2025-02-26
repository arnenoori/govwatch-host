"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Shield } from "lucide-react"
import { useState } from "react"
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input"
import Link from "next/link"
import { ButtonAbout } from "@/components/ui/button-about"

// Uncomment these imports if you re-enable the stats cards
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { BarChart3, Building2, DollarSign, FileText } from "lucide-react"

export default function Home() {
  const [searchValue, setSearchValue] = useState("")

  // DoD contracts-related placeholders
  const contractPlaceholders = [
    "Show me contracts over $10M in California last year",
    "Which contractors received the most funding in 2023?",
    "Find missile defense systems contracts",
    "Search for Navy contracts awarded to small businesses",
    "Show me aircraft procurement contracts since 2020"
  ]

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    console.log(e.target.value)
  }

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Searching for:", searchValue)
    // Implement actual search functionality here
  }

  return (
    <div className="flex min-h-screen flex-col bg-background hero-pattern">
      <header className="border-b border-muted">
        <div className="mx-auto w-full max-w-[800px] px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold glow text-primary">GovWatch</span>
          </div>
          <nav className="flex gap-6">
            <Link href="/about">
              <ButtonAbout />
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-24">
          <div className="mx-auto w-full max-w-[800px] px-4 sm:px-6 lg:px-8">
            <h1 className="heading-serif mb-4 text-center text-6xl font-normal text-primary">
              Search DoD Contract Spending
            </h1>
            <p className="mb-12 text-center text-xl text-muted-foreground">
              Ask questions in plain English about Department of Defense contracts and spending
            </p>
            <div className="mx-auto">
              <PlaceholdersAndVanishInput
                placeholders={contractPlaceholders}
                onChange={handleSearchChange}
                onSubmit={handleSearchSubmit}
              />
            </div>
          </div>
        </section>

        <section className="py-8 mb-16">
          <div className="mx-auto w-full max-w-[800px] px-4 sm:px-6 lg:px-8">
            {/* Stats cards commented out since frontend is static
            <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-secondary/50 border-muted rounded-2xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Contracts</CardTitle>
                  <FileText className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">142,384</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last year</p>
                </CardContent>
              </Card>
              <Card className="bg-secondary/50 border-muted rounded-2xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                  <DollarSign className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">$245.6B</div>
                  <p className="text-xs text-muted-foreground">+12.3% from last year</p>
                </CardContent>
              </Card>
              <Card className="bg-secondary/50 border-muted rounded-2xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Contractors</CardTitle>
                  <Building2 className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">2,464</div>
                  <p className="text-xs text-muted-foreground">+4.75% from last year</p>
                </CardContent>
              </Card>
              <Card className="bg-secondary/50 border-muted rounded-2xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Contract</CardTitle>
                  <BarChart3 className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">$1.72M</div>
                  <p className="text-xs text-muted-foreground">-3.2% from last year</p>
                </CardContent>
              </Card>
            </div>
            */}

            <div className="mx-auto rounded-2xl border border-muted bg-secondary/30 overflow-hidden shadow-md card-glow">
              <div className="border-b border-muted px-6 py-5 bg-secondary/60">
                <h2 className="font-semibold text-primary text-xl">Recent Large Contracts</h2>
              </div>
              <Table className="border-collapse">
                <TableHeader>
                  <TableRow className="hover:bg-secondary/50">
                    <TableHead className="text-muted-foreground font-medium py-4">Contractor</TableHead>
                    <TableHead className="text-muted-foreground font-medium py-4">Description</TableHead>
                    <TableHead className="text-muted-foreground font-medium py-4">Date</TableHead>
                    <TableHead className="text-right text-muted-foreground font-medium py-4">Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-secondary/50 border-t border-muted/20">
                    <TableCell className="font-medium text-primary text-lg py-4">Lockheed Martin Corp.</TableCell>
                    <TableCell className="text-foreground py-4">F-35 Lightning II Fighter Aircraft</TableCell>
                    <TableCell className="text-muted-foreground py-4">2024-02-15</TableCell>
                    <TableCell className="text-right font-bold text-primary py-4">$712M</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-secondary/50 border-t border-muted/20">
                    <TableCell className="font-medium text-primary text-lg py-4">Boeing Defense</TableCell>
                    <TableCell className="text-foreground py-4">CH-47F Chinook Helicopters</TableCell>
                    <TableCell className="text-muted-foreground py-4">2024-02-12</TableCell>
                    <TableCell className="text-right font-bold text-primary py-4">$543M</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-secondary/50 border-t border-muted/20">
                    <TableCell className="font-medium text-primary text-lg py-4">Raytheon Technologies</TableCell>
                    <TableCell className="text-foreground py-4">Missile Defense Systems</TableCell>
                    <TableCell className="text-muted-foreground py-4">2024-02-10</TableCell>
                    <TableCell className="text-right font-bold text-primary py-4">$489M</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-secondary/50 border-t border-muted/20">
                    <TableCell className="font-medium text-primary text-lg py-4">General Dynamics</TableCell>
                    <TableCell className="text-foreground py-4">Combat Vehicle Upgrades</TableCell>
                    <TableCell className="text-muted-foreground py-4">2024-02-08</TableCell>
                    <TableCell className="text-right font-bold text-primary py-4">$367M</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-secondary/50 border-t border-muted/20">
                    <TableCell className="font-medium text-primary text-lg py-4">Northrop Grumman</TableCell>
                    <TableCell className="text-foreground py-4">Surveillance Systems</TableCell>
                    <TableCell className="text-muted-foreground py-4">2024-02-05</TableCell>
                    <TableCell className="text-right font-bold text-primary py-4">$298M</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-muted py-6">
        <div className="mx-auto w-full max-w-[800px] px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
          GovWatch - Making Department of Defense spending transparent and accessible.
        </div>
      </footer>
    </div>
  )
}

