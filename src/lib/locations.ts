interface Location {
    butikk: Butikk,
    verksted: string,
}

interface Butikk {
    link: string,
    address: string
}

export const  location: Location = {
    butikk: {
        link: "https://www.google.com/maps?ll=59.268474,10.407767&z=18&t=m&hl=no&gl=NO&mapclient=embed&q=Kammegaten+1+3110+T%C3%B8nsberg",
        address: "Kammegaten 1, 3110 Tønsberg"
    },   
    verksted: ""
}
