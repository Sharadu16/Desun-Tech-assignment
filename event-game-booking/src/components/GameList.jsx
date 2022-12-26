import React from 'react'

const GameList = () => {
    const data = [
        {
           id : 1,
           name : "Hi Sticker",
           image : "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulROXF7ZSeP_h52BHFBtGgNWu7-aIhRfw_LYdC994N2kk4XFkq-ga-iElG0Hu5Nw2biW89jz3APm8kM_aj-nLIfGJwE8aAvR_wfoyPCv28EfCTqIvA/330x192",
           about : ""
        },
        {
            id : 2,
            name : "Punch Game",
            image : "https://m.media-amazon.com/images/I/416OwI75opL.png",
            about : ""
         },
         {
            id : 3,
            name : "Hi Sticker",
            image : "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulROXF7ZSeP_h52BHFBtGgNWu7-aIhRfw_LYdC994N2kk4XFkq-ga-iElG0Hu5Nw2biW89jz3APm8kM_aj-nLIfGJwE8aAvR_wfoyPCv28EfCTqIvA/330x192",
            about : ""
         },
         {
            id : 4,
            name : "Hi Sticker",
            image : "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulROXF7ZSeP_h52BHFBtGgNWu7-aIhRfw_LYdC994N2kk4XFkq-ga-iElG0Hu5Nw2biW89jz3APm8kM_aj-nLIfGJwE8aAvR_wfoyPCv28EfCTqIvA/330x192",
            about : ""
         }
    ];

  return (
     <div>
        {
            data.map((item,index) => {
                return <div key={index}>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>{item.about}</p>
                    <button>Add To Cart</button>
                </div>
            })
        }
     </div>
  )
}

export default GameList;