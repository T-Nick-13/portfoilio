import Contacts from '../Contacts/Contacts';

function Footer() {
  return (
    <footer className="footer">
      <Contacts
        activeLinks={['email', 'telegram', 'instagram', 'adobe']}
      />
    </footer>
  );
}


export default Footer;
