class Solution
{
public:
    bool isPossibleDivide(vector<int> &hand, int groupSize)
    {
        sort(hand.begin(), hand.end());
        int n = hand.size();
        unordered_map<int, int> mp;
        for (auto a : hand)
        {
            mp[a]++;
        }
        for (auto a : hand)
        {
            if (mp[a] > 0)
            {
                for (int i = a + 1; i < a + groupSize; i++)
                {
                    if (mp[i] == 0)
                    {
                        return false;
                    }
                    mp[i]--;
                }
                mp[a]--;
            }
        }
        return true;
    }
};