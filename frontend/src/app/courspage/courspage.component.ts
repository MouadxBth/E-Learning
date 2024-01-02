import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courspage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courspage.component.html',
  styleUrl: './courspage.component.css'
})
export class CourspageComponent {
  course = {
    id: "AngularByJoe",
    title: 'Angular Course',
    author: 'John Doe',
    category: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis metus ac felis placerat tempus. Vivamus nec turpis ante. Vestibulum in commodo risus. Aenean sed cursus urna, luctus tincidunt turpis. Donec consectetur ex quis augue efficitur semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque porta vestibulum lorem eu porta. Phasellus ullamcorper ullamcorper sagittis. In pharetra lorem id mollis mollis.',
    creationDate: new Date(2023, 0, 1), 
    lastUpdateDate: new Date(2024,0,2),         
    numChapters: 10,
    numQuizzes: 5,
    numEnrolledMembers: 100
  };
  reviews= [{
    comment:'just a great course',
    reviewerName:'YOUNES MOUSTAQUIM',
    imageUrl:'https://scontent.fcmn1-2.fna.fbcdn.net/v/t39.30808-6/299733741_1182146529017172_2535569331721590521_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHkD2_A6Ng8REjHZBZyt-EiT54eT4aAfP1Pnh5PhoB8_Zmy_gIld395pBjYeFS-2h4-nwsKZcZLzmlaiGhiilHP&_nc_ohc=3jvrt2pT7eQAX-PO1xF&_nc_zt=23&_nc_ht=scontent.fcmn1-2.fna&oh=00_AfCCRiZQU5qGnIXoEoq4ndtwV00d44sAQhl5poRpRG7YNg&oe=65990FC1'
  },
  {
    comment:'just a great course',
    reviewerName:'YOUNES MOUSTAQUIM',
    imageUrl:'https://scontent.fcmn1-2.fna.fbcdn.net/v/t39.30808-6/299733741_1182146529017172_2535569331721590521_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHkD2_A6Ng8REjHZBZyt-EiT54eT4aAfP1Pnh5PhoB8_Zmy_gIld395pBjYeFS-2h4-nwsKZcZLzmlaiGhiilHP&_nc_ohc=3jvrt2pT7eQAX-PO1xF&_nc_zt=23&_nc_ht=scontent.fcmn1-2.fna&oh=00_AfCCRiZQU5qGnIXoEoq4ndtwV00d44sAQhl5poRpRG7YNg&oe=65990FC1'
  },
  {
    comment:'just a great course ljlkjklkdjljkl,,lnljfkljdlkuhojoijiouihyhujjhuhuihyjijiohuhuiojkhkjhkjhhjgkhjhjhhjhjjhjhjjjhhhojlkjjkhhuijkjlkjlkjk',
    reviewerName:'YOUNES MOUSTAQUIM',
    imageUrl:'https://scontent.fcmn1-2.fna.fbcdn.net/v/t39.30808-6/299733741_1182146529017172_2535569331721590521_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHkD2_A6Ng8REjHZBZyt-EiT54eT4aAfP1Pnh5PhoB8_Zmy_gIld395pBjYeFS-2h4-nwsKZcZLzmlaiGhiilHP&_nc_ohc=3jvrt2pT7eQAX-PO1xF&_nc_zt=23&_nc_ht=scontent.fcmn1-2.fna&oh=00_AfCCRiZQU5qGnIXoEoq4ndtwV00d44sAQhl5poRpRG7YNg&oe=65990FC1'
  }
];
}
