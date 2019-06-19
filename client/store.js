import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)


const state = {
    total: 0,
    cats: [
        { name: 'PIRATE', id: 0, pic: 'img/PIRATE.jpg', comments: [], score: 1000, isWinner: false, votes: 0 },
        { name: 'AUTOMNE', id: 1, pic: "img/AUTOMNE.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },
        { name: 'DUO', id: 2, pic: "img/DUO.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },
        { name: 'FANTOMAS', id: 3, pic: "img//FANTOMAS.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },
        { name: 'PELOTE', id: 4, pic: "img/PELOTE.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },
        { name: 'BLANCHE', id: 5, pic: "img/BLANCHE.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },
        { name: 'BOUDEUSE', id: 6, pic: "img/BOUDEUSE.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },
        { name: 'CACHETTE', id: 7, pic: "img/CACHETTE.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },
        { name: 'CALIN', id: 8, pic: "img/CALIN.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },
        { name: 'TRIO', id: 9, pic: "img/TRIO.jpg", comments: [], score: 1000, isWinner: false, votes: 0 },
        { name: 'COUETTE', id: 10, pic: "img/COUETTE.jpg", comments: [], score: 1000, isWinner: false, votes: 0 },
        { name: 'BROSSADENT', id: 11, pic: "img/BROSSADENT.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },      
        { name: 'CURIEUX', id: 12, pic: "img/CURIEUX.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },
        { name: 'FAUVE', id: 13, pic: "img/FAUVE.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },
        { name: 'FELIN', id: 14, pic: "img/FELIN.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },
        { name: 'FETARD', id: 15, pic: "img/FETARD.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },
        { name: 'GRIFFON', id: 16, pic: "img/GRIFFON.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },
        { name: 'JARDIN', id: 17, pic: "img/JARDIN.jpg", comments: [], score: 1000 , isWinner: false, votes: 0 },
        { name: 'JASON', id: 18, pic: "img/JASON.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },
        { name: 'LECTEUR', id: 19, pic: "img/LECTEUR.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },
        { name: 'MOUSTACHE', id: 20, pic: "img/MOUSTACHE.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },
        { name: 'MYKONOS', id: 21, pic: "img/MYKONOS.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },
        { name: 'NOUCHKA', id: 22, pic: "img/NOUCHKA.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },
        { name: 'VACANCES', id: 23, pic: "img/VACANCES.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },
        { name: 'DIANE', id: 24, pic: "img/DIANE.jpg", comments: [], score: 1000, isWinner: false, votes: 0  },
        ],



}

const getters = {
    
}
const mutations = {
    
    updateTotal: state => state.total++,

    updateVote: (state, indexW) => state.cats[indexW].votes++,

    updateScores: (state, newScores) => {
        console.log('MUTATION', newScores)
        state.cats[newScores.indexW].score = newScores.scoreW
        state.cats[newScores.indexL].score = newScores.scoreL
        console.log('MUTATION ACTED!', newScores, state.cats[newScores.indexW].name, state.cats[newScores.indexW].score, state.cats[newScores.indexL].name, state.cats[newScores.indexL].score)
    },

    addComment: (state, com ) => {
        console.log('STORE', com, state.cats[com.id])
        state.cats[com.id].comments.push(com.comment)
    }
}

const actions = {
    
}



export const store = new Vuex.Store({ state, getters, mutations, actions })
    
