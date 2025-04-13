import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactForm() {
  return (
    <form className="space-y-4">
      <div>
        <Input type="text" placeholder="Name" className="bg-white" />
      </div>
      <div>
        <Input type="email" placeholder="Email" className="bg-white" />
      </div>
      <div>
        <Input type="text" placeholder="Subject" className="bg-white" />
      </div>
      <div>
        <textarea
          placeholder="Message"
          className="w-full min-h-[150px] rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C79C4A] focus:border-transparent"
        ></textarea>
      </div>
      <Button className="bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white">Send Message</Button>
    </form>
  )
}
