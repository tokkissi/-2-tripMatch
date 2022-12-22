import { CommunityModel } from "../models";

class CommunityService {
  private communityModel = new CommunityModel();

  async getTotalPage(region: string | undefined) {
    const condition: { region?: string } = {};
    if (region) condition.region = region;
    const totalPage = await this.communityModel.countPages(condition);
    return totalPage;
  }
  async getTenCommus(page: number, region: string | undefined) {
    const condition: { region?: string } = {};
    if (region) condition.region = region;
    const communities = await this.communityModel.findTen(page, condition);
    return communities;
  }
  async getCommunity(communityId: string) {
    const community = await this.communityModel.findOne(communityId);
    return community;
  }
  async update(communityId: string, body: object) {
    await this.communityModel.updateOne(communityId, body);
  }
  async delete(communityId: string) {
    await this.communityModel.deleteOne(communityId);
  }
  async create(body: object, author: object) {
    await this.communityModel.create({ ...body, author });
  }
}

const communityService = new CommunityService();

export default communityService;
