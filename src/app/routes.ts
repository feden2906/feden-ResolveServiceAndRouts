import {Routes} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UsersResolveService} from './services/resolve/users-resolve.service';
import {PostsComponent} from './components/posts/posts.component';
import {PostsResolveService} from './services/resolve/posts-resolve.service';
import {FullUserComponent} from './components/full-user/full-user.component';
import {FullPostComponent} from './components/full-post/full-post.component';

export const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: UsersComponent, resolve: {usersData: UsersResolveService}, children: [
      {path: ':id', component: FullUserComponent}
    ]},
  {path: 'posts', component: PostsComponent, resolve: {postsData: PostsResolveService}, children: [
      {path: ':id', component: FullPostComponent}
    ]}
];

