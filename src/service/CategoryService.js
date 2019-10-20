import Axios from "axios";

class CategoryService {

    getDesigners() {
        const url = '172.22.8.174:44355/api/boardgame/getdesigners'
        Axios.get(url).then(res=> console.log(res))
        const names = [
            'Oliver Hansen',
            'Van Henry',
            'April Tucker',
            'Ralph Hubbard',
            'Omar Alexander',
            'Carlos Abbott',
            'Miriam Wagner',
            'Bradley Wilkerson',
            'Virginia Andrews',
            'Kelly Snyder',
        ];

        return names;
    }
    getPublishers() {
        const url = '172.22.8.174:44355/api/boardgame/getpublishers'
        Axios.get(url).then(res=> console.log(res))
        const names = [
            'Oliver Hansen',
            'Van Henry',
            'April Tucker',
            'Ralph Hubbard',
            'Omar Alexander',
            'Carlos Abbott',
            'Miriam Wagner',
            'Bradley Wilkerson',
            'Virginia Andrews',
            'Kelly Snyder',
        ];

        return names;
    }
    getArtists() {
        const url = '172.22.8.174:44355/api/boardgame/getartists'
        Axios.get(url).then(res=> console.log(res))
        const names = [
            'Oliver Hansen',
            'Van Henry',
            'April Tucker',
            'Ralph Hubbard',
            'Omar Alexander',
            'Carlos Abbott',
            'Miriam Wagner',
            'Bradley Wilkerson',
            'Virginia Andrews',
            'Kelly Snyder',
        ];

        return names;
    }
    getCategories() {
        const names = [
            'Oliver Hansen',
            'Van Henry',
            'April Tucker',
            'Ralph Hubbard',
            'Omar Alexander',
            'Carlos Abbott',
            'Miriam Wagner',
            'Bradley Wilkerson',
            'Virginia Andrews',
            'Kelly Snyder',
        ];
        const url = '172.22.8.174:44355/api/boardgame/getcategories'
        console.log(url)
        Axios.get(url).then(res=> console.log(res))
        return names;
    }

    getAll(payload){
        const url = '172.22.8.174:44355/api/boardgame/searchboardgames'

        Axios.post(url, payload).then(res => console.log(res))
    }
}


export default new CategoryService();
