
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface ContactFormProps {
  propertyId?: string;
  propertyTitle?: string;
  receiverEmail?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ propertyId, propertyTitle, receiverEmail }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(
    propertyTitle 
      ? `Hi, I am interested in the property "${propertyTitle}". Please contact me with more information.` 
      : ''
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      if (!propertyTitle) {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      }
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
      {propertyTitle ? (
        <h3 className="text-lg font-semibold mb-4 text-indigo-800">Interested in this property?</h3>
      ) : (
        <h3 className="text-xl font-semibold mb-1 text-indigo-800">Get in Touch</h3>
      )}
      
      {!propertyTitle && (
        <p className="text-gray-600 mb-6">Have questions or need assistance? Contact us!</p>
      )}

      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Type your message here..."
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-orange-600 hover:bg-orange-700 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
