import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Owner {
  name: string;
  phone: string;
  email: string;
  avatar: string;
}

interface ContactOwnerProps {
  owner: Owner;
}

export const ContactOwner: React.FC<ContactOwnerProps> = ({ owner }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Owner</h2>
      
      <div className="flex items-center mb-4">
        <Avatar className="h-14 w-14 mr-4">
          <AvatarImage src={owner.avatar} alt={owner.name} />
          <AvatarFallback>{owner.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{owner.name}</div>
          <div className="text-sm text-gray-500">Equipment Owner</div>
        </div>
      </div>
      
      <div className="space-y-4">
        <Button variant="outline" className="w-full justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {owner.phone}
        </Button>
        
        <Button variant="outline" className="w-full justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {owner.email}
        </Button>
      </div>
    </div>
  );
};
