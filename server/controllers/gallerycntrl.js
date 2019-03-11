
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

  updateArtwork: (req, res) => {
    console.log('hit')
    const db = req.app.get('db');
    const { id } = req.params;
    const { name, description, painting_url, price } = req.body;

    db.art.update_art([id, name, description, painting_url, price]).then(resp => {
      console.log(resp)
      res.status(200).send(resp);
    });
  },

  getArt: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.art.select_art([id])
      .then(resp => {
        res.status(200).send(resp[0]);
      })
      .catch(err => console.log(err));
  },

}

