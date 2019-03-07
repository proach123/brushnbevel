 module.exports={

createArt: (req, res) => {
    const db = req.app.get('db');
    const { title, description, painting_url, price } = req.body;

    db.art.make_art([title, description, painting_url, price, req.session.user.artist_id]).then(resp => {
      res.status(200).send(resp);
    });
  },

  showArtistArt: (req, res) => {
    const db= req.app.get('db');
    

    db.art.display_art([req.session.user.artist_id]).then(response => {
      res.status(200).send(response)
    })
  },
  deleteArt: (req, res) => {
    const db = req.app.get('db');
    let { id } = req.params;
    id = parseInt(id);

    db.art.delete_art([id]).then(resp => {
      res.status(200).send(resp);
    });
  },

}

