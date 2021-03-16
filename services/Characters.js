import { https } from './Connection';
import { APIKEY, HASH } from './config'

export default {
    listCharacters: (characterName) =>{
        return https.get('characters', {
            params: {
                nameStartsWith: characterName,
                orderBy: 'name',
                apikey: APIKEY,
                hash: HASH,
                ts: '1',
                limit: '100'
            }
        })
    }
}
