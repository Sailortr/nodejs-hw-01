import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';
import createFakeContact from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    // Öncelikle mevcut kişileri oku
    const contacts = await readContacts();

    // Yeni kişiler oluştur ve mevcut listeye ekle
    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }

    // Güncellenmiş listeyi dosyaya yaz
    await writeContacts(contacts);

    console.log(`${number} new contacts generated.`);
  } catch (error) {
    console.error('Error generating contacts:', error.message);
  }
};

generateContacts(5);
