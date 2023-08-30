package net.gabriels.configuration;

import java.util.List;

import org.springframework.data.domain.Page;

import net.gabriels.model.UserDetail;

public class Pagenation {
	private List<UserDetail> content;
	private long totalElement;
	private int totalPage;
	private int pageSize;
	private int pageNo;
	private boolean isLast;
	private boolean isFirst;

	public List<UserDetail> getContent() {
		return content;
	}

	public void setContent(List<UserDetail> content) {
		this.content = content;
	}

	public long getTotalElement() {
		return totalElement;
	}

	public void setTotalElement(long totalElement) {
		this.totalElement = totalElement;
	}

	public int getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getPageNo() {
		return pageNo;
	}

	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}

	public boolean isLast() {
		return isLast;
	}

	public void setLast(boolean isLast) {
		this.isLast = isLast;
	}

	public boolean isFirst() {
		return isFirst;
	}

	public void setFirst(boolean isFirst) {
		this.isFirst = isFirst;
	}
	public static Pagenation createPagenation(Page<UserDetail> page)
	{
		Pagenation pagenation=new Pagenation();
		List<UserDetail> userDetail = page.getContent();
		pagenation.setContent(userDetail);
		pagenation.setTotalPage(page.getTotalPages());
		pagenation.setTotalElement(page.getTotalElements());
		pagenation.setPageSize(page.getSize());
		pagenation.setPageNo(page.getNumber());
		pagenation.setFirst(page.isFirst());
		pagenation.setLast(page.isLast());
		return pagenation;
	}

}
