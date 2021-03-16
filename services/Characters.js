import { https } from './Connection';
import { APIKEY, HASH } from './config'

export default {
    listCharacters: () =>{
        return https.get('characters', {
            params: {
                nameStartsWith: 'spider',
                orderBy: 'name',
                apikey: APIKEY,
                hash: HASH,
                ts: '1'
            }
        })
    }
}
