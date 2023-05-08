<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Category;
use Illuminate\Database\Seeder;
use App\Models\Post;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {
    // \App\Models\User::factory(10)->create();

    // \App\Models\User::factory()->create([
    //     'name' => 'Test User',
    //     'email' => 'test@example.com',
    // ]);

    $posts = [
      ['title'=>'Hehe Not Bad', 'slug'=>'a-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changedddd', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.', 'user_id'=>1, 'category_id' => 1],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'b-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.', 'user_id'=>1, 'category_id' => 2],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'c-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.', 'user_id'=>1, 'category_id' => 3],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'d-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.', 'user_id'=>1, 'category_id' => 4],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'e-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.', 'user_id'=>1, 'category_id' => 5],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'f-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.', 'user_id'=>2, 'category_id' => 6],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'g-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.', 'user_id'=>2, 'category_id' => 7],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'h-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.', 'user_id'=>2, 'category_id' => 8],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'i-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.', 'user_id'=>2, 'category_id' => 9],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'j-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.', 'user_id'=>2, 'category_id' => 10],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'k-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.', 'user_id'=>3, 'category_id' => 11],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'l-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.', 'user_id'=>3, 'category_id' => 12],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'m-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.', 'user_id'=>3, 'category_id' => 13],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'n-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.', 'user_id'=>3, 'category_id' => 14],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'0-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.', 'user_id'=>3, 'category_id' => 15],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'p-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.', 'user_id'=>4, 'category_id' => 16],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'q-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.', 'user_id'=>4, 'category_id' => 17],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'r-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.', 'user_id'=>4, 'category_id' => 18],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'s-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.', 'user_id'=>4, 'category_id' => 19]
    ];

    foreach ($posts as $post) {
      DB::table('posts')->insert([
        'title' => $post['title'],
        'slug' => $post['slug'],
        'content' => $post['content'],
        'user_id'=> $post['user_id'],
        'category_id'=> $post['category_id'],
        'created_at' => now(),
        'updated_at' => now(),
      ]);
    }

    // ===================
    $categories = [
      ['name' => 'Programming', 'slug' => 'programming'],
      ['name' => 'Health and Fitness', 'slug' => 'health-and-fitness'],
      ['name' => 'Technology', 'slug' => 'technology'],
      ['name' => 'Business and Entrepreneurship', 'slug' => 'business-and-entrepreneurship'],
      ['name' => 'Travel and Adventure', 'slug' => 'travel-and-adventure'],
      ['name' => 'Food and Cooking', 'slug' => 'food-and-cooking'],
      ['name' => 'Fashion and Beauty', 'slug' => 'fashion-and-beauty'],
      ['name' => 'Parenting and Family', 'slug' => 'parenting-and-family'],
      ['name' => 'Education', 'slug' => 'education'],
      ['name' => 'Art and Culture', 'slug' => 'art-and-culture'],
      ['name' => 'Politics and Current Events', 'slug' => 'politics-and-current-events'],
      ['name' => 'Sports and Recreation', 'slug' => 'sports-and-recreation'],
      ['name' => 'Science and Innovation', 'slug' => 'science-and-innovation'],
      ['name' => 'Entertainment and Pop Culture', 'slug' => 'entertainment-and-pop-culture'],
      ['name' => 'Finance and Investing', 'slug' => 'finance-and-investing'],
      ['name' => 'Lifestyle', 'slug' => 'lifestyle'],
      ['name' => 'DIY and Crafts', 'slug' => 'diy-and-crafts'],
      ['name' => 'Environment and Sustainability', 'slug' => 'environment-and-sustainability'],
      ['name' => 'Religion and Spirituality', 'slug' => 'religion-and-spirituality'],
      ['name' => 'Mental Health and Wellness', 'slug' => 'mental-health-and-wellness'],
    ];

    foreach ($categories as $category) {
      DB::table('categories')->insert([
        'name' => $category['name'],
        'slug' => $category['slug'],
        'created_at' => now(),
        'updated_at' => now(),
      ]);
    }

    $users = [
      [
        'username' => 'gedeapriana',
        'name'=> 'I Komang Gede Apriana',
        'slug' => 'gedeapriana',
        'role' => 'writer',
        'email' => 'gedeapriana36@gmail.com',
        'password' => '12345678'
      ],
      [
        'username' => 'kenny',
        'name'=> 'Kenny Belle Lesmana',
        'slug' => 'kenny',
        'role' => 'writer',
        'email' => 'kenny@gmail.com',
        'password' => '12345678'
      ],
      [
        'username' => 'albert',
        'name'=> 'Albert Okario',
        'slug' => 'albert',
        'role' => 'writer',
        'email' => 'albert@gmail.com',
        'password' => '12345678'
      ],
      [
        'username' => 'wisnu',
        'name'=> 'Wisnu Wardhana',
        'slug' => 'wisnu',
        'role' => 'writer',
        'email' => 'wisnu@gmail.com',
        'password' => '12345678'
      ]
    ];


    foreach ($users as $user) {
      DB::table('users')->insert([
        'username' => $user['username'],
        'name'=> $user['name'],
        'slug' => $user['slug'],
        'role' => $user['role'],
        'email' => $user['email'],
        'password' => $user['password'],
        'created_at' => now(),
        'updated_at' => now(),
      ]);
    }
  }
}