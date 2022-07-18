import Alert from 'react-bootstrap/Alert';

function AlertCustom() {
  return (
    <Alert variant="warning" transition={true}>
      <Alert.Heading style={{ textAlign: 'center' }}>
        Номер люкс для новобрачных в подарок!
      </Alert.Heading>
    </Alert>
  );
}

export default AlertCustom;
