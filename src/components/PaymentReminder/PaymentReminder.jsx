import Reminder from '../../assets/images/remidner.jpg';

const PaymentReminder = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: '2rem',
      backgroundColor: '#1a1a1a', 
      color: '#fff', 
    }}>
      <div style={{
        maxWidth: '500px',
        padding: '2rem',
        borderRadius: '10px',
        backgroundColor: '#2c2c2c', 
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.6)',
        textAlign: 'center'
      }}>
        <img
          src={Reminder}
          alt="Payment reminder"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            marginBottom: '1.5rem',
          }}
        />
<h2 style={{ color: '#ffcc00', marginBottom: '1rem' }}>Oii! Payment Pending!</h2>
<p style={{ color: '#ccc', lineHeight: '1.6' }}>
  Looks like you’ve got a little tab to settle Sam! Clear it up to unlock the rest of the site. We both know it’s worth it! 😉
</p>

      </div>
    </div>
  );
};

export default PaymentReminder;
