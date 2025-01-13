import ContactForm from '@/components/ContactForm'
import { Toaster } from 'sonner'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <ContactForm />
      <Toaster />
    </div>
  )
}