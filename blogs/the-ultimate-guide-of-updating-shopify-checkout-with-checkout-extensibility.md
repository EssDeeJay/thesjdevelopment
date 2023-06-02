---
title: 'The Ultimate Guide : Updating Shopify Checkout with the latest checkout extensibility updates.'
date: '2023-05-23'
truncatedDescription: 'Stay up to date with Shopify new checkout update guidelines that revolutionize the way you update your store checkout process. Discover the latest changes and optimize your Shopify store for seamless customer experiences.'
image_url: '/img/blogs-images/sale-tag.jpg'
author: 'Henry Latham'
author_img: '/img/henry_profile.jpg'
blockquote: 'checkout.liquid will be deprecated for the Information, Shipping, and Payment pages of checkout  on August 13, 2024. Shopify plus merchants will be required to upgrade the checkout using checkout extensibility guidelines provided by Shopify.'
author_profession: 'Web Designer - Lead'
---

In this article, we will go over to determine which steps are required in order to update the checkout, how you can migrate your changes and how you can revert back to the original checkout before if needed.

‌

First, Let us understand by the word update itself and what is there in this update ?

‌

To answer this, Shopify has released these updates on checkout to make the checkout more user friendly as well as more accessible to perform the changes in look and feel as well as to the backend logic that was not possible or limited before with the use of checkout.liquid. This method had a limited scopes in checkout and by this update Shopify is encouraging the use of new checkout extensions in place of custom edits that were done on checkout to make the workflow more robust and clear.

‌

Checkout extensions can be created with private app or are also included in a lot of checkout friendly apps as per the functionality. You can either choose to develop your own custom extension from the partner dashboard or you can also Download a checkout app that will do that for you.

‌

This update will require you to replace all the custom code including any pixel or customer tracking events to be taken out before you publish your new checkout. We will discuss the steps below on how to update the checkout.liquid to the new checkout extensibility guide.

‌

1. Make sure you are on a Shopify plus plan or has a checkout extensibility active on your store. To check this you can go to Settings > Checkout and check if there is an option to edit the checkout. If there is a checkout extensibility active on your store you can create a draft checkout from there by clicking on ‘Create Draft Checkout’.



![checkout-1.png](https://trello.com/1/cards/64711c4326e33e6ec53cbe5c/attachments/64716dfdb007d9d30ce92c6f/download/checkout-1.png)



2. When you are inside draft checkout, you can edit the checkout branding including editing the colors, background and the accent colors according to your brand. Set the branding as you like. If you need more access to the branding in checkout, you can use Branding API within your custom app or checkout extension to achieve so. You can use Branding API to use custom fonts as per your brand, editing button paddings and so on. Make sure you save your work before you go back. You can see the preview of your checkout while inside draft checkout to see how your new checkout will look.


![checkout-5.png](https://trello.com/1/cards/64711c4326e33e6ec53cbe5c/attachments/64716e97383bdf9fb74bec68/download/checkout-5.png)


3. Next, open your checkout.liquid file and note down all custom changes you have made till date including any pixels such as Google Analytics or Google tag manager. Once you have list of all required changes, make sure you carry over those by either..


4. Downloading a checkout app from Shopify store that would do the similar thing for you.


5. Or creating your own custom private app and creating the checkout extension that would do the exact same thing that you were doing before in checkout.liquid file.Having said that, this is an advanced way of doing this and requires technical expertise. If you are not comfortable doing on your own, reach out to Shopify Experts like us and we will help you from there.


![checkout-3.png](https://trello.com/1/cards/64711c4326e33e6ec53cbe5c/attachments/64716eb23afb058ca63372c7/download/checkout-3.png)


6. To add pixels you can use either am app in the app Store or use the custom pixel functionality in Shopify to track the one you already have. Shopify already has a guide on how you can migrate your Google tag manger pixels to use the custom pixels in Shopify admin itself. Please read this guide to know how to do this. If you still have any questions, contact us to help you fix it.


![checkout-4.png](https://trello.com/1/cards/64711c4326e33e6ec53cbe5c/attachments/64716ec1c976df251ded846a/download/checkout-4.png)


7. Once all changes are migrated, you can review those in your draft checkout to make sure it aligns with the one you had active in production currently.


8. Once you are happy with all the changes you are set to make it live. Click publish and boom. You have successfully upgraded your checkout.

‌

Note that, this will revoke your checkout.liquid file from your theme and you won't be able to edit it anymore.

‌

So, that’s all when updating your checkout from the checkout file to checkout extensions.

‌

I know a lot of you have this common question asking, **I have some problems in production which I noticed after publishing this new checkout, What to do ? Can I revert back to old method ?**

‌

Simple answer is, Yes you can revert back to checkout.liquid. You can unpublish your new checkout and revert back your file of checkout.liquid if you run into any issues or wish to revert to this method for any reason.

‌

Just remember, checkout.liquid will deprecate forever from August 13, 2024 and hence need to be migrated before that date. The sooner, the better.

‌

**Also, another common question is, Does new checkout extensibility works with Shopify scripts?**

=> Yes, it works with the Shopify scripts. Again, Shopify scripts will also be deprecating from August 13, 2024 and hence it's recommended to use Shopify functions to change the backend logic instead of scripts.

‌

Checkout our article on Shopify functions to learn more and see what they can do.

‌

For any questions or queries, Please shoot a message or contact us, so we can assist you in a better way.

‌

Cheers ! Happy Coding !