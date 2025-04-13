import { Skeleton } from "@/components/ui/skeleton"

export function AboutPageSkeleton() {
  return (
    <>
      {/* Hero Skeleton */}
      <div className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-slate-200">
        <div className="container relative z-10 text-center px-4 sm:px-6">
          <Skeleton className="h-12 w-3/4 max-w-lg mx-auto mb-4" />
          <Skeleton className="h-6 w-1/2 max-w-md mx-auto" />
        </div>
      </div>

      {/* Intro Paragraph Skeleton */}
      <section className="py-12 md:py-16 overflow-hidden">
        <div className="container px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-5 w-full mb-2" />
            <Skeleton className="h-5 w-11/12 mb-2" />
            <Skeleton className="h-5 w-10/12" />
          </div>
        </div>
      </section>

      {/* Our Story Skeleton */}
      <section className="py-12 md:py-16 bg-[#F6EFD6] overflow-hidden">
        <div className="container px-4 sm:px-6">
          <Skeleton className="h-10 w-64 mx-auto mb-8" />
          <div className="max-w-4xl mx-auto">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="mb-4">
                <Skeleton className="h-5 w-full mb-1" />
                <Skeleton className="h-5 w-full mb-1" />
                <Skeleton className="h-5 w-4/5" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Skeleton */}
      <section className="py-12 md:py-16 bg-[#B3D3F2]/20 overflow-hidden">
        <div className="container px-4 sm:px-6">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-5 w-1/2 max-w-lg mx-auto mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-full max-w-[320px]">
                  <Skeleton className="h-[350px] w-full rounded-md mb-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="py-12 md:py-16 overflow-hidden">
        <div className="container px-4 sm:px-6">
          <div className="bg-[#0A1E39] p-6 md:p-12 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <Skeleton className="h-8 w-48 mx-auto mb-4 bg-white/20" />
              <Skeleton className="h-4 w-full mx-auto mb-2 bg-white/20" />
              <Skeleton className="h-4 w-5/6 mx-auto mb-6 bg-white/20" />
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <Skeleton className="h-10 w-32 rounded-md bg-white/20" />
                <Skeleton className="h-10 w-32 rounded-md bg-white/20" />
                <Skeleton className="h-10 w-32 rounded-md bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 