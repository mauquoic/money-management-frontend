import React from "react";
import ostrich from './../static/images/notfound/ostrich.png';
import {NotFoundItem} from "./NotFoundItem";
import dog from './../static/images/notfound/dog.png';
import map from './../static/images/notfound/map.png';
import ghost from './../static/images/notfound/ghost.png';


export const NotFoundPage = () => {

  const key = Math.floor(Math.random() * 4);

  return (

    <div>
      {key === 0 && <NotFoundItem image={ostrich}
                                  title={'This Page is Buried in the Sand'}
                                  text={'You have never seen an ostrich head. Whenever you’re around it seems ostriches are avoiding your gaze. You came on ' +
                                  'this trip specifically to see an ostrich head, but here is this ostrich right in front of you, head invisible. You may never see an ostrich head. '}/>}
      {key === 1 && <NotFoundItem image={dog}
                                  title={'A dog ate this page!'}
                                  text={'Your dog is cute but honestly a menace. Where are my shoes? Where is my graduation certificate? Where is the chocolate cake I baked for my Aunt’s birthday? ' +
                                  'And why did you take your dog to the vet on that same Thursday?!'}/>}
      {key === 2 && <NotFoundItem image={ghost}
                                  title={'This Page is a Ghost'}
                                  text={'Once alive and now dead, this ghost appears to have some unfinished business. Could it be with you? Or the treasure hidden under the floorboards ' +
                                  'of the old mansion in the hills that may never reach its rightful owner, a compassionate school teacher in Brooklyn.'}/>}
      {key === 3 && <NotFoundItem image={map}
                                  title={'This Page is Not on the Map'}
                                  text={'You told your friends you weren’t bringing your phone, to try and experience what travel was like back in the day. You bought a map and a bottle of water and carried your camera' +
                                  ' for the money shot. But the map was from 2005 and the landscape had changed. So here you are, in the middle of a large field, ' +
                                  'that the map continues to claim is a local grocer.'}/>}
    </div>
  )
}