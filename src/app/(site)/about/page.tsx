
import CompanyDetails from '@/components/about/CompanyDetails';
import OwnerDetails from '@/components/about/OwnerDetails';
import Certification from '@/components/about/Certification';
import TrustBridgeChakra from '@/components/about/TrustBridgeChakra';

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-20">
            <CompanyDetails />
            <TrustBridgeChakra />
            <OwnerDetails />
            <Certification />
        </div>
    );
}