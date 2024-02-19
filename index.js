const { Telegraf } = require('telegraf');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);

const binarysearchString = `#include <iostream>
#include <vector>

int binarySearch(const std::vector<int>& nums, int target) {
    int left = 0;
    int right = nums.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // target not found
}

int main() {
    std::vector<int> nums = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int target = 5;

    int index = binarySearch(nums, target);

    if (index != -1) {
        std::cout << "Target found at index: " << index << std::endl;
    } else {
        std::cout << "Target not found" << std::endl;
    }

    return 0;
}
`;


try{
    bot.start((ctx) => ctx.reply('Welcome to Biswa\'s World')); // /start

bot.command('binarysearch', (ctx)=>ctx.reply(binarysearchString)); // / binarysearch

bot.command('HeyBabe', (ctx)=>ctx.reply('Hello Baby')); // / binarysearch
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.help((ctx) => ctx.reply('send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('❤️')); // /sticker

bot.launch();
}catch{
    console.log("Unexpected Command")
}