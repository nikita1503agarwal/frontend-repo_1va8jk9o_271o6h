import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs'

export default function ProductDetails() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-6 text-white">
      <Tabs defaultValue="details">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="care">Care</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <ul className="list-disc space-y-2 pl-6 text-blue-100/90">
            <li>ThermoFlex weave regulates temperature for year-round comfort</li>
            <li>Hidden pocket system with magnetic closures</li>
            <li>3D-knit cuffs for perfect fit without pressure points</li>
            <li>Laser-cut ventilation mapped to heat zones</li>
          </ul>
        </TabsContent>
        <TabsContent value="materials">
          <p className="text-blue-100/90">68% recycled poly, 28% Tencel, 4% elastane. Dyed with waterless process to reduce environmental impact.</p>
        </TabsContent>
        <TabsContent value="care">
          <p className="text-blue-100/90">Machine wash cold, tumble dry low. Do not bleach. Cool iron if needed.</p>
        </TabsContent>
        <TabsContent value="shipping">
          <p className="text-blue-100/90">Ships in 1-2 business days. Free expedited shipping on orders over $75.</p>
        </TabsContent>
        <TabsContent value="reviews">
          <div className="space-y-4">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
                <div className="mb-1 font-semibold">Alex M.</div>
                <div className="mb-2 text-sm text-blue-200/80">Verified buyer • San Francisco, CA</div>
                <p className="text-blue-100/90">The most comfortable hoodie I own. The fabric feels premium and looks futuristic without being loud.</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
