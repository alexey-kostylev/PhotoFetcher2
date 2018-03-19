import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { PhotoAlbum, AlbumEntry } from '../../../models';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit, OnChanges {
  @Input() albums: Array<AlbumEntry>;

  ngOnChanges(changes: SimpleChanges): void {
    const albumsListChange = changes['albums'];
    const albumList = albumsListChange.currentValue as Array<PhotoAlbum>;
    if (albumList) {
      console.log('album list got: ' + albumList.length);
    } else {
      console.log('album list is null');
    }
  }

  constructor() {}

  ngOnInit() {}

  fetchAllAlbums() {}

  loadAlbum(albumId) {}
}
