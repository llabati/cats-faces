import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


const state = {
    total: 0,
    cats: [
        { name: 'PIRATE', likes: 0 },
        { name: 'AUTOMNE', likes: 0  },
        { name: 'DUO', likes: 0  },
        { name: 'FANTOMAS', likes: 0  },
        { name: 'PELOTE', likes: 0  },
        { name: 'BLANCHE', likes: 0  },
        { name: 'BOUDEUSE', likes: 0  },
        { name: 'CACHETTE', likes: 0  },
        { name: 'CALIN', likes: 0  },
        { name: 'TRIO', likes: 0 },
        { name: 'COUETTE', likes: 0 },
        { name: 'BROSSADENT', likes: 0  },      
        { name: 'CURIEUX', likes: 0  },
        { name: 'FAUVE', likes: 0  },
        { name: 'FELIN', likes: 0  },
        { name: 'FETARD', likes: 0  },
        { name: 'GRIFFON', likes: 0  },
        { name: 'JARDIN', likes: 0 },
        { name: 'JASON', likes: 0  },
        { name: 'LECTEUR', likes: 0  },
        { name: 'MOUSTACHE', likes: 0  },
        { name: 'MYKONOS', likes: 0  },
        { name: 'NOUCHKA', likes: 0  },
        { name: 'VACANCES', likes: 0  },
        { name: 'DIANE', likes: 0  },
        ],



}

const getters = {
    
}
const mutations = {
    
    updateTotal: (state, indexW) => {
        state.total++,
        state.cats[indexW].likes++ }

}

const actions = {
    
}



export const store = new Vuex.Store({ state, getters, mutations, actions })
    
