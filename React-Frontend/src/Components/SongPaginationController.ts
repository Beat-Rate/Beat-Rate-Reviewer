

import firebase from "firebase";

import init from "../FirebaseInit";

init();
interface SongData {
    songref?: string;
    image : string;  
    name: string ;
}

class Node{
    next : any = null;
    prev : any =  null;
    val : any = null;

    constructor(val? :SongData , next? : Node , prev?: Node  ){
        if (val != null){
            this.val = val;
        }
        if(next != null ){
            this.next = next;
        }
        if(prev != null ){
            this.prev = prev;
        }
    }
}




class PlayList{ 
    current_node :Node = new Node()

    /*  Pass in 'last_node' because 
        the calling of PaginationController's
        import songs is async. If the user goes back before
        the data importing callback begins. the placement of the 
        songs will not be at the very end of the linked list 
        if we used current_node as the reference to do our insertion.
    */
    addSong(data :SongData , last_node :Node){
     
        let new_node :Node= new Node(data , undefined,undefined); 
    //  <- last_node -> new_node
        last_node.next = new_node;
    // <- last_node -> <- new_node
        new_node.prev = last_node;
        last_node= new_node;
    }
}


export default class PaginationController{

    globalRef = firebase.database().ref("Global");
    songs: PlayList = new PlayList();
    count : number = 0;
    max_num : number = 10;


    
    import_songs(){
        this.globalRef
            .startAt(this.count)
            .endAt(this.max_num)
            .get().then((snapshot)=>{
               
                snapshot.forEach((data)=>{
                    let actual_data = data.val();
                    this.songs.addSong(
                        
                        {   songref: actual_data.songref , 
                            image : actual_data.imageref , 
                            name : actual_data.display_name} ,
                            this.songs.current_node
                            )

                })
            })
    }
  
    proceed(){
        if (this.count == this.max_num){
            this.max_num += 10;
            this.songs.current_node.prev = null; // don't hold the prev songs in memory
            this.import_songs();

        }
    }

    }
    

