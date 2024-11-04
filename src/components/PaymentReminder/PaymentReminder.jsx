import Reminder from '../../assets/images/remidner.jpg'

const PaymentReminder = () => {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: '2rem',
        background: '#f8f9fa'
      }}>
        <div style={{ maxWidth: '600px', padding: '2rem', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <img src={Reminder} alt="" />
          <h2 style={{ color: '#333' }}>Complete Your Payment</h2>
          <p style={{ color: '#666' }}>To access the full website, please complete your pending payment. Thank you!</p>
        </div>
      </div>
    );
  };
  
  export default PaymentReminder;
  