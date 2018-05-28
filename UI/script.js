;(function() {

    var photoPosts = [
        {
            id: '1',
            description: 'Amazing!',
            createdAt: new Date('2018-04-08T21:30:00'),
            author: 'Anna',
            photoLink: 'http://photoportal.by/photos/1',
            hashTags: [],
            likes: []
        },
        {
            id: '2',
            description: 'Cool!',
            createdAt: new Date('2018-04-08T21:31:10'),
            author: 'Kastet',
            photoLink: 'http://photoportal.by/photos/2',
            hashTags: [],
            likes: []
        },
        {
            id: '3',
            description: 'Bad nigga',
            createdAt: new Date('2018-04-08T21:32:43'),
            author: 'Nigga',
            photoLink: 'http://photoportal.by/photos/3',
            hashTags: [],
            likes: []
        },
        {
            id: '4',
            description: 'Poletela',
            createdAt: new Date('2018-04-08T21:39:23'),
            author: 'Mask',
            photoLink: 'http://photoportal.by/photos/4',
            hashTags: [],
            likes: []
        },
        {
            id: '5',
            description: 'my little stark',
            createdAt: new Date('2018-04-08T21:40:56'),
            author: 'tor',
            photoLink: 'http://photoportal.by/photos/5',
            hashTags: [],
            likes: []
        },
        {
            id: '6',
            description: 'blacksquare',
            createdAt: new Date('2018-04-08T21:45:13'),
            author: 'Malevich',
            photoLink: 'http://photoportal.by/photos/6',
            hashTags: [],
            likes: []
        },
        {
            id: '7',
            description: 'where is the trigger?!',
            createdAt: new Date('2018-04-08T21:46:50'),
            author: 'Batmen',
            photoLink: 'http://photoportal.by/photos/7',
            hashTags: [],
            likes: []
        },
        {
            id: '8',
            description: 'javascript',
            createdAt: new Date('2018-04-08T21:47:56'),
            author: 'Exadel',
            photoLink: 'http://photoportal.by/photos/8',
            hashTags: [],
            likes: []
        },
        {
            id: '9',
            description: 'Lecture',
            createdAt: new Date('2018-04-08T21:48:23'),
            author: 'Exadel',
            photoLink: 'http://photoportal.by/photos/9',
            hashTags: [],
            likes: []
        },
        {
            id: '10',
            description: 'yes i do',
            createdAt: new Date('2018-04-08T21:49:44'),
            author: 'Evilnigga',
            photoLink: 'http://photoportal.by/photos/10',
            hashTags: [],
            likes: []
        },
        {
            id: '11',
            description: 'black',
            createdAt: new Date('2018-04-08T21:50:55'),
            author: 'Alex',
            photoLink: 'http://photoportal.by/photos/11',
            hashTags: [],
            likes: []
        },
        {
            id: '12',
            description: 'i wont give in',
            createdAt: new Date('2018-04-08T21:51:11'),
            author: 'Alex',
            photoLink: 'http://photoportal.by/photos/12',
            hashTags: [],
            likes: []
        },
        {
            id: '13',
            description: 'lost in the echo',
            createdAt: new Date('2018-04-08T21:52:24'),
            author: 'LeninPark',
            photoLink: 'http://photoportal.by/photos/13',
            hashTags: [],
            likes: []
        },
        {
            id: '14',
            description: 'i work',
            createdAt: new Date('2018-04-08T21:53:57'),
            author: 'AGLukashenko',
            photoLink: 'http://photoportal.by/photos/14',
            hashTags: [],
            likes: []
        },
        {
            id: '15',
            description: 'my next goal',
            createdAt: new Date('2018-04-08T21:54:12'),
            author: 'Killer',
            photoLink: 'http://photoportal.by/photos/15',
            hashTags: [],
            likes: []
        },
        {
            id: '16',
            description: '1st April',
            createdAt: new Date('2018-04-08T21:55:30'),
            author: 'FPM',
            photoLink: 'http://photoportal.by/photos/16',
            hashTags: [],
            likes: []
        },
        {
            id: '17',
            description: 'New Android',
            createdAt: new Date('2018-04-08T21:56:44'),
            author: 'Google',
            photoLink: 'http://photoportal.by/photos/17',
            hashTags: [],
            likes: []
        },
        {
            id: '18',
            description: 'Nexus 10',
            createdAt: new Date('2018-04-08T21:57:49'),
            author: 'TeylorCorp',
            photoLink: 'http://photoportal.by/photos/18',
            hashTags: [],
            likes: []
        },
        {
            id: '19',
            description: 'Heavy falcon',
            createdAt: new Date('2018-04-08T21:58:11'),
            author: 'Mask',
            photoLink: 'http://photoportal.by/photos/19',
            hashTags: [],
            likes: []
        },
        {
            id: '20',
            description: 'in flight',
            createdAt: new Date('2018-04-08T21:59:00'),
            author: 'Mask',
            photoLink: 'http://photoportal.by/photos/20',
            hashTags: [],
            likes: []
        }
    ];

    function getPhotoPosts(skip, top, filterConfig) {
        if(!skip || !top)
            return false;
        if(!isInteger(skip) || !isInteger(top))
            return false;
        if(skip<0 || top <=0)
            return false;
        if(skip >= photoPosts.length)
            return false;
        var max = photoPosts.length;
        if(skip + top < photoPosts.length)
            max = skip + top;
        var arr = [];
        for(var i = skip; i < max; i++){
            arr.push(photoPosts[i]);
        }
        var result = [];
        if(filterConfig != null){
            if('author' in filterConfig && filterConfig.author instanceof String && filterConfig.author != null){
                for(var i = 0; i < arr.length; i++) {
                    if (arr[i].author === filterConfig.author) {
                        result.push(arr[i]);
                    }
                }
                arr.splice(0,arr.length);
            }
            if('hashTags' in filterConfig && filterConfig.hashTags instanceof Array && filterConfig.hashTags.length !== 0) {
                for(var i = 0; i < result.length; i++) {
                    arr.push(result[i]);
                }
                result.splice(0, result.length);
                for(var i = 0; i < arr.length; i++) {
                    for(var j = 0; j < filterConfig.hashTags.length; j++){
                        if(arr[i].hashTags.indexOf(filterConfig.hashTags[j]) !== -1) {
                            if(j === filterConfig.hashTags.length - 1)
                                result.push(arr[i]);
                        }
                        else
                            break;

                    }
                }
                arr.splice(0, arr.length);
            }
            for(var k = 0; k < result.length; k++){
                arr.push(result[k]);
            }
        }
        arr.sort(compareDates);
        return arr;
    }

    function getPhotoPost(id) {
        if(!isInteger(id) && id > 0 && id <= photoPosts.length)
            return photoPosts[id - 1];
        else
            return null;
    }

    function addPhotoPost(photoPost) {
        if(validatePhotoPost(photoPost)){
            photoPosts.push(photoPost);
            return true;
        }
        else
            return false;
    }

    function validatePhotoPost(photoPost) {
        if(photoPost.author instanceof String && isEmpty(photoPost.author)
            && photoPost.photoLink instanceof String && isEmpty(photoPost.photoLink)
            && photoPost.createdAt instanceof Date && photoPost.createdAt != null
            && photoPost.description instanceof String && photoPost.description.length < 200
            && photoPost.id instanceof String && photoPost.hashTags instanceof Array){
            for(var i = 0; i < photoPost.hashTags.length; i++ ){
                if(!photoPost.hashTags[i] instanceof String)
                    return false;
            }
        }
        else
            return false;

    }

    function editPhotoPost(id, photoPost){
        if(!isInteger(id) && id > 0 && id <= photoPosts.length){
            var obj = photoPosts[id - 1];
            if('hashTags' in photoPost){
                obj.hashTags = photoPost.hashTags;
            }
            if('likes' in photoPost){
                obj.likes = photoPost.likes;
            }
            if('photoLink' in photoPost){
                obj.photoLink = photoPost.photoLink;
            }
            if('description' in photoPost){
                obj.description = photoPost.description;
            }
            if(validatePhotoPost(obj)){
                photoPosts[id - 1] = obj;
                return true;
            }
            else
                return false;
        }
        else
            return false;
    }

    function removePhotoPost(id){
        if(!isInteger(id) && id > 0 && id <= photoPosts.length){
            for(var i = id; i < photoPosts.length; i++){
                photoPosts[i].id = String( i - 1);
            }
            photoPosts.splice(id - 1, 1);
            return true;
        }
        return false;
    }

    function compareDates(a, b) {
        return a.createdAt - b.createdAt;
    }

    function isEmpty(str) {
        return (!str || 0 === str.length);
    }

    function isInteger(num) {
        return (num ^ 0) === num;
    }

})()