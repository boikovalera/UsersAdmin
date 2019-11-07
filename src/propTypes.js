import PropTypes from 'prop-types';

const user = PropTypes.shape({    
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({        
        street: PropTypes.string,
        suite: PropTypes.string,
        city: PropTypes.string,
        zipcode: PropTypes.string,
        geo : PropTypes.shape({        
            lat: PropTypes.string,
            lng: PropTypes.string
        })
    }),
    phone: PropTypes.string,
    website: PropTypes.string,
    company: PropTypes.shape({        
        name: PropTypes.string,
        catchPhrase: PropTypes.string,
        bs: PropTypes.string
    })
});

const album = PropTypes.shape({    
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string  
});

const photo  = PropTypes.shape({
    albumId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    url:  PropTypes.string,
    thumbnailUrl: PropTypes.string
});

export default {
    ...PropTypes, user, album, photo
}