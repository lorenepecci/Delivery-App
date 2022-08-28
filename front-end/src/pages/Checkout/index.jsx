import React from 'react';
import AddressDelivery from '../../components/addressDelivery';
import Navbar from '../../components/Navbar';
import './Checkout.css';

export default function Checkout() {
/*   const [isDisabled, setIsDisabled] = useState(false);

  const onHandleSubmit = async (e) => 'ok';
 */
  return (
    <div className="container-checkout">
      <Navbar />
      <div className="addressDelivery">
        <AddressDelivery />
      </div>
    </div>
  );
}
