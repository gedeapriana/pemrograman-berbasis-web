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
      ['title'=>'What We’re Reading: Aren’t humans amazing sometimes?', 'slug'=>'what-were-reading-arent-humans-amazing-sometimes', 'content'=>'Humans are amazing sometimes. In the midst of *gestures broadly* everything happening in the world right now, its worth coming back to this simple truth from time to time, and I wanted to share two stories from Medium this week that illustrate the point in two very different ways. The first is from Amby Burfoot, writing about the Boston Marathon (which will be held this year on April 17). Burfoot won the marathon in 1968, a massive achievement in itself, but his story is about the many times he ran it afterwards, and especially how the race changed after the 2013 bombing. He ends with the hard won wisdom that every mile is a gift: “After all, I don’t know if I’ll ever be here again. Life gives us no guarantees. But I do know for sure that right now there is no other place in the world I would rather be.'],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'i-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.'],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'i-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.'],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'i-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.'],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'i-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.'],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'i-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.'],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'i-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.'],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'i-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.'],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'i-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.'],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'i-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.'],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'i-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.'],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'i-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.'],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'i-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.'],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'i-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.'],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'i-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.'],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'i-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.'],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'i-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.'],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'i-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.'],
      ['title'=>'I Won the 1968 Boston Marathon. And Ran Many More. After the Bombs, Everything Change', 'slug'=>'i-won-the-1968-boston-marathon-and-ran-many-more-after-the-bombs-everything-changed', 'content'=>'More than a half-century ago I ran each Boston Marathon consumed by thoughts of winning. In April 1968, I actually achieved that impossible dream. These days, 55 years later, Im still running Boston. Mainly to give thanks. So many thanks. It doesn’t matter how slowly I cover the course, or where I finish. The miracle is that I can still run 26.2 miles on foot from rural Hopkinton to downtown Bostons Copley Square.']
    ];

    foreach ($posts as $post) {
      DB::table('posts')->insert([
        'title' => $post['title'],
        'slug' => $post['slug'],
        'content' => $post['content'],
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
  }
}
