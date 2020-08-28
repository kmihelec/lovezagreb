import axios from "axios";

const fetchPage = async () => {
    try {
        const res = await axios.get('https://www.lovezagreb.hr/page/settings');
        if(res.data.text !== 'App Settings') throw new Error('Unable to fetch data')
        return res.data;
    } catch (e) {
        console.log(e)
        return {errorMsg: e.message}
    }
}

export default fetchPage;

