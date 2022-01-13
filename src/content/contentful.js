
const client = require('contentful').createClient({
  space: '52y5a4iq09n0',
  accessToken: 'or5oQUlXSm4zxq_0QsJgV0G5o5Nlpa8RfCe_6MmcP6M'
});

export default async function getAllContent() {
    const result = await client.getEntries({
        content_type : 'allContentOfPersonalPage',
        include : 10,
    });
    return result.items[0].fields.language;
    
}
