class Address {


  constructor() {
  }

  city: string; // Miasto
  street: string; // Ulica
  building: string; // Numer domu
  flatNo: string | null; // Numer mieszkania
}

class Consents {


  constructor() {
  }

  newsletter: boolean; // Zgoda na otrzymywanie wiadomości e-mail.
  sms: boolean; // Zgoda na otrzymywanie wiadomości SMS.
}

export class RegisteredUser {
  name: string; // Imię
  surname: string; // Nazwisko
  email: string; // E-mail
  phone: string | null; // Numer telefonu
  password: string; // Hasło
  pet: 'dog' | 'cat' | 'other'; // Zwierzę
  address: Address = new Address();
  consents: Consents = new Consents();

  constructor() {

  }
}
