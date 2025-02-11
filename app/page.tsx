"use client"

import { Portada } from "./Portada/page"
import { CountdownSection } from "./CountdownSection/page"
import { CeremoniayFiesta } from "./Ceremonia/page"
import { FotosSection } from "./FotosSection/page"
import { RegalosSection } from "./RegalosSection/page"
import { InstagramSection } from "./InstagramSection/page"
import { ConfirmacionSection } from "./ConfirmacionSection/page"
import { DressCodeSection } from "./DressCodeSection/page"
import { CancionesSection } from "./Canciones/page"
import { Separator } from "@/components/ui/separator"


export default function Home() {


  return (
    <main className="tracking-wide text-2xl md:mx-12">
      <Portada />

      <Separator className="my-4" />

      <CountdownSection />

      <Separator className="my-4" />

      <CeremoniayFiesta />

      <Separator className="my-4" />

      <FotosSection />

      <Separator className="my-4" />

      <RegalosSection />

      <Separator className="my-4" />

      <InstagramSection />

      <Separator className="my-4" />

      <ConfirmacionSection />

      <Separator className="my-4" />

      <DressCodeSection />

      <Separator className="my-4" />

      <CancionesSection />

    </main>
  )
}

